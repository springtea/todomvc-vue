;(function () {
	const todos = [
		{
			id:1,
			title:"eating",
			completed:true
		},
		{
			id:2,
			title:"shopping",
			completed:false
		},
		{
			id:3,
			title:"coding",
			completed:false
		}
	]
	new Vue({
		data:{
			title:"",
			todos,
			isEditing:null
		},
		methods:{
			handlerEnterNewToDo(e){
				const value = e.target.value.trim()
				console.log(e)
				if(!value.length){
					return
				}
				const todos = this.todos
				todos.push({
					id:todos.length?todos[todos.length-1].id+1:1,
					title:value,
					completed:false
				})
			},
			handlerClickToggleAll(e){
				const checked = e.target.checked
				this.todos.forEach(element => {
					element.completed = checked
				});
			},
			handlerDeleteToDo(index,e){
				console.log('index ' + index)
				console.log(e)
				this.todos.splice(index,1)
			},
			handlerDoubleClickToEditing(item){
				this.isEditing = item
			},
			handlerEnterDowntoSaveEditing(index,e){
				
				const value = e.target.value
				console.log(value)
				//非空校验
				if(!value.trim()){
					console.log(index)
					this.todos.splice(index,1)
					return
				}
				console.log(index)
				this.todos[index].title = value
				this.isEditing = null
			},
			handleEscDownToCancelEditing(){
				isEditing = null
			},
			handlerClearCompleted(){
				console.log('hello')
				// const completed = this.todos.filter(value => value.completed === true)
				for(let i = 0;i < this.todos.length;i++){
					
					if(this.todos[i].completed === true){
						this.todos.splice(i,1)
						i--
						console.log("xxxxxxxx")
					}
				}
			}
		}
	}).$mount('#app')

})();
