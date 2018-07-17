import Parse from 'parse';

class Message extends Parse.Object {

    constructor(){
        super('Message');
    }

}

Parse.Object.registerSubclass('Message', Message);

export default Message;