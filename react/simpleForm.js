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