const [answer, setAnswer] = useState('');

async function handleSubmit(e) {
  e.preventDefault();
}

function handleInputChange(e) {
  setAnswer(e.target.value);
}

return (
  <>
    <form onSubmit={handleSubmit}>

      <input
        value={answer}
        onChange={handleInputChange}
      />

      <button
        disabled={answer.length === 0}
      >
        Submit
      </button>

    </form>
  </>
);

// Control a checkbox input with state. When it's chekced, we show the component
const [show, setShow] = useState(true);

return (
  <div>
    {show && <MyComponent />} 
    <label>
      <input
        type="checkbox"
        checked={show}
        onChange={e => {
          setShow(e.target.checked)
        }}
      />
      Render the component
    </label>
  </div>
)