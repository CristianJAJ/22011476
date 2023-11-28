//creamos el nodoo de arbol 
function TreeNode(value){
    return{
        value: value,
        left: null,
        right: null,
        right: null
    }
}

function insertNode(node, value){
    if (value < node.value){
        if (node.lef === null){
            node.left = TreeNode(value);
        } else{
            insertNode(node,left, value);
        } 
        }else {
            if (node.right === null){
                node.right = TreeNode(value);
            }else{
                insertNode(node.right,value);
            }
        }
    }

function insertData(root, value){
    if (root === null){
        return TreeNode(value);
    } else{
        insertNode(root, value);
        return root;
    }
}

function SearchNode(node,value){
    if (node === null || node.value === value){
    return node;
     }

    if(value < node.value){
        return SearchNode(node.lef, value);
    }

    return SearchNode(node.right, value);
}

function SearchNode(root, value){
return SearchNode(root, value);
}