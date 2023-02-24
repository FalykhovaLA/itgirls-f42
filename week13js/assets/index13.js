
const commentName=document.querySelector('#comment-name');
const commentAvatar=document.querySelector('#comment-avatar');
const commentText=document.querySelector('#textInput');
const button=document.querySelector('#comment-add');
const commentChat=document.querySelector('.chat__comment');
const answerYes=document.querySelector('.answer--1');

const avatarCollection=[  
'assets/images/img1.jpg',
'assets/images/img2.jpg',
'assets/images/img3.jpg',
'assets/images/img4.jpg',
'assets/images/img5.jpg'
];

function randomAvatar(){
    let random = Math.floor(Math.random() * avatarCollection.length);
    return avatarCollection[random];
};

const craeteComment = () => {
    let message= document.createElement('div');
    message.className='message';
    //commentChat.append(message);

    let messageAvatar=document.createElement('img');
    messageAvatar.classList='message_avatar';
    if(commentAvatar.value !==''){
        messageAvatar.src=commentAvatar.value; }
    else{
        messageAvatar.src = randomAvatar();
    }
    //commentChat.prepend (messageAvatar);

    let messageName=document.createElement('div');
    messageName.classList='message_name';
    messageName.textContent= checkName(commentName.value);
    //commentChat.prepend(messageName);
    if (answerYes.checked===true) {
        } else {
            messageName.textContent="username";
        }

    let messageText =document.createElement('div');
    messageText.classList='message_text';
    messageText.textContent= checkSpam (commentText.value);
    //commentChat.prepend(messageText);

    let messageTime = document.createElement('div');
    messageTime.className ='message_time';
    messageTime.textContent = new Date();
    message.innerHTML = messageAvatar.outerHTML + messageName.outerHTML + messageText.outerHTML + messageTime.outerHTML;
    commentChat.prepend(message);
    
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
        userName=userName.trim().split(' ');
        let formattedName=[];
        userName.forEach((element)=> {
            newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
            formattedName.push(newName); 
        });
        let superName=formattedName.join(' ');
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