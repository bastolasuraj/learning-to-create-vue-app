import {createStore} from 'vuex';

const store = createStore({
    state(){
       return{
           memories: [
               { id: "m1", image: "http://sbastola.com/om.jpg", title: "Gosainkunda", description: "Hiking for 3 days" },
               { id: "m2", image: "http://sbastola.com/om.jpg", title: "Pokhara", description: "A trip worth Remembering" },
               { id: "m3", image: "http://sbastola.com/om.jpg", title: "Kushma", description: "Bunjee Jumping: What an experience" },
               { id: "m4", image: "http://sbastola.com/om.jpg", title: "Butuwal and Lumbini", description: "Butuwal and Lumbini" },
               { id: "m5", image: "http://sbastola.com/om.jpg", title: "Bhedetar", description: "a beauty of easrtern Nepal" },
               { id: "m6", image: "http://sbastola.com/om.jpg", title: "Ilam", description: "Nepal's tea garden" },
           ]
       };
    },
    getters:{
        memories(state){
            return state.memories; 
        },
        memory(state){
            return (memoryId)=>{
                return state.memories.find((memory) => memory.id===memoryId);
            }
        }
    }
});

export default store;