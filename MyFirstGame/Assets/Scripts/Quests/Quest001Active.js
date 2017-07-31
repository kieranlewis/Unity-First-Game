var TextBoxOnCheck : int = 0;
var MessageBox : GameObject;
var TextBox : GameObject;

var QuestItemToClose : GameObject;
var QusetItemToShow : GameObject;

function OnMouseDown() {
	if(TextBoxOnCheck == 0) {
		TextBoxOnCheck = 1;
		MessageBox.SetActive(true);
		TextBox.GetComponent.<Text>().text = "You found the loot. Thanks friend";
		yield WaitForSeconds(3);
		gameObject.SetActive(false);
		MessageBox.SetActive(false);
		QuestItemToClose.SetActive(false);
		QusetItemToShow.SetActive(true);
	} 
}