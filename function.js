function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x:mouseX , y: mouseY})
}

function mouseReleased() {
     chain1.fly();
}

