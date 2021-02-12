var taskCount = 0;

function todo()
{
	var ul = document.getElementById('ul');
    var text = document.getElementById('input');
    
    if (text !== '')
    {
    	// create task (li element)
    	var task = document.createElement('li');
        task.id = (++taskCount);
        
        // create checkbox
    	var checkBox = task.appendChild(document.createElement('input'));
        checkBox.type = 'checkbox';
        checkBox.onchange = toggleTask;

		// append checkbox and text to task
        task.appendChild(checkBox);
        task.appendChild(document.createTextNode(text.value));

		// append task to list
        ul.appendChild(task);

		// reset input text
        text.value = '';
    }
}

function toggleTask()
{
	var task = document.getElementById(this.parentNode.id);
	if (this.checked)
    {
    	task.style.textDecoration = 'line-through';
    }
    else
    {
    	task.style.textDecoration = 'none';
    }
}