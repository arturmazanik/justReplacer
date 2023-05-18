class justReplacer {
    constructor(element, testEl) {
        this.element = element;
        this.testEl = testEl;
    }

    getData() {
        try {
            const body = document.getElementById('justReplacerPanel');
            body.style.width = '100%';
            body.style.height = '100%';
            body.style.backgroundColor = 'red';

            const div = document.createElement('div');
            div.className = 'block';
            div.style.width = '5%';
            div.style.height = '5%';
            div.style.backgroundColor = 'black';
            div.style.position = 'absolute';
            div.setAttribute('draggable', true);


            const div2 = document.createElement('div');
            div2.className = 'blockFinish';
            div2.style.width = '5%';
            div2.style.height = '5%';
            div2.style.backgroundColor = 'blue';
            div2.style.position = 'absolute';
            div2.style.right = '0';
            div2.setAttribute('draggable', true);

            body.appendChild(div);
            body.appendChild(div2);

            // div.ondragstart = this.dragStart();

            div.ondragstart = function (e) {
                let block = e.target;
                block.style.backgroundColor = 'gray';
                block.classList.add("moving");
            }

            div.ondragenter = function (e) {
                let block = e.target;

                console.log(e, e.target)
            }

            div2.ondragenter = function (e) {
                let block = e.target;
                block.style.backgroundColor = 'green';

                console.log(e, e.target)
            }

            div.ondragend = function (e) {
                let block = e.target;
                block.style.backgroundColor = 'black';
            }


            console.log(this.element + '---' + this.testEl);
        } catch (e) {
            console.log('Replacer panel doesnt found!');
        }
    }

    handleDragStart(ev) {
        ev.dataTransfer.effectAllowed = 'move';
    }

    dragStart(ev) {
        let block = ev.target.parentElement;
        block.classList.add("moving");
    }

    dragEnter(ev) {
        let block = ev.target.parentElement;

        if(!block.classList.contains('moving'))
            block.classList.add('enter');
    }

    dragLeave(ev) {
        let block = ev.target.parentElement;

        if(block.classList.contains('enter')) {
            dragElement = block.getAttribute("id");
            block.classList.remove("enter");
        }
    }

    dragEnd(ev) {
        alert("ahtung!");
    }
}
export default justReplacer