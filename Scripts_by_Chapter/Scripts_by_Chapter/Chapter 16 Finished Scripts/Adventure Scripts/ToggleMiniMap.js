function Start () {
   //add adjustments to compensate for aspect ratio here
}

function Update () {
   if (Input.GetKeyDown("m")) { // check for m keyboard key press
     if (gameObject.Find("Control Center").GetComponent(MenuManager).menuMode) return;
     if(camera.enabled == false) camera.enabled = true;
     else camera.enabled = false;
   }
}
