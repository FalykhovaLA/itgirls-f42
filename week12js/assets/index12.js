
const commentName=document.querySelector('#comment-name');
const commentAvatar=document.querySelector('#comment-avatar');
const commentText=document.querySelector('#textInput');
const button=document.querySelector('#comment-add');
const commentChat=document.querySelector('.chat__comment');

const craeteComment = () => {
    let massage= document.createElement('div');
    massage.className='massage';
    commentChat.append(massage);

    let massageAvatar=document.createElement('img');
    massageAvatar.classList='massage_avatar';
    massageAvatar.src=commentAvatar.value;
    commentChat.prepend (massageAvatar);

    let massageName=document.createElement('div');
    massageName.classList='massage_name';
    massageName.textContent= checkName(commentName.value);
    commentChat.prepend(massageName);
    

    let massageText =document.createElement('div');
    massageText.classList='massage_text';
    massageText.textContent= checkSpam (commentText.value);
    commentChat.prepend(massageText);

};
    const clearField =() =>{
        commentName.value="";
        commentAvatar.value="";
        commentText.value="";
    };
    
    const checkSpam = (string)=> {
        let spamCheked = string.replace(/xxx|viagra/gi,('***'));
        return spamCheked;
    };

    const checkName= (name)=>{
        let userName = name;
        userName=userName.trim().split('');
        let formattedName=[];
        userName.forEach((element)=> {
            newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
            formattedName.push(newName); 
        });
        let superName=formattedName.join('');
        return superName;
    };

    

    button.addEventListener('click',() => {
        craeteComment();
        clearField();
        
    });

//console.log(formattedName.join(''));
        //let userName0 = name.toLowerCase();
        //let userName1=userName.trim();
        //let userName1 = userName.charAt(0).toUpperCase()+userName0.slice(1);
        //let newName=userName1.replace(/(^|\s)\S/g,userName1.toUpperCase());
        //userName=userName.trim();
        //console.log(userName);
        //userName=userName.replace(/(^|\s)\S/g,"");