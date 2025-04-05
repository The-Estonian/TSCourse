abstract class UIElement {
    constructor(public identifier: string){}
    clone(targetLocation: string) {
        // logic to uplicate the UI element
    }
}

// const uiElement = new UIElement();

class SideDrawerElement extends UIElement{
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}