const qnas = document.querySelectorAll('.qna');
const arrows = document.querySelectorAll('.arrow');

qnas.forEach((qna,index)=>{
    qna.addEventListener('click',()=>{
        qnas.forEach((qn,ind)=>{
            if(index == ind){
                if(qn.classList.contains('active')){
                    qn.classList.remove('active')
                }else
                qn.classList.add('active')
            }else{
                qn.classList.remove('active')
            }
        })
    })
})

