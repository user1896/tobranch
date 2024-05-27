import pyautogui
import time

def timer(seconds):
	for i in range(1, seconds+1):
		print(seconds+1-i)
		time.sleep(1)


def press_key(key, sleep_time):
	print(f"Hold the key b")
	pyautogui.keyDown(key)
	print(f"Sleep for 1 second\n")
	
	time.sleep(sleep_time)
	print(f"Press the space key")
	pyautogui.press("space")
	print(f"Sleep for 1 second\n")

	time.sleep(sleep_time)
	print(f"Release the key b")
	pyautogui.keyUp(key)


def main():
	timer(3)
	while True:
		press_key("b", 2)
		print(f"Waiting for 5 seconds")
		time.sleep(5)


main()