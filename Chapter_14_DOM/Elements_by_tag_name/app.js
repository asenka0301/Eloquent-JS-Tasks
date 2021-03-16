function byTagName(node, tagName) {
    tagName = tagName.toUpperCase();
    let finalArray = [];
    let nodeChildren = node.children;
    if(nodeChildren.length !== 0){
        for(let children of nodeChildren){  
            if(children.nodeType == document.ELEMENT_NODE){
                if(children.nodeName == tagName){
                    finalArray.push(children);
                }
                finalArray = finalArray.concat(byTagName(children, tagName));
            }
        }
    }    
    return finalArray;
}

// console.log(byTagName(document.body, "span"));