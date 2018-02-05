 new Vue({
    el: '#tasks',
    data: {
        // heading: 'hello world'
        tasks: [
            { body: 'Go to the stroe', completed: false }
        ],
        newTask: ''
    },

    filters: {   //在v-for中的改成computed。这个暂时不用，都用computed写在v-for上
        // inProcess: function (tasks) {
        //     return tasks.filer(function (task) {
        //         return !task.completed;
        //     });
        // }
        inProcess: function (task) {
            console.log(task);

            // if( task.completed == false) { //这个不行诶，废话，因为根本没传过来
            if( !task.completed ) {
                return task;
            };
        }
    },

    // computed: {
    //     inProcessTasks: function () {
    //         for(var task of this.tasks) {
    //             if (task.completed === false) {
    //                 console.log(task.body);
    //                 return task;        //返回一个数组吧？所以不要用for of了，用filter
    //             }
    //         }
    //     }
    // },

    computed: {     //写法还是同上面的filters,这个inProcessTasks正确的
        inProcessTasks: function () {
            return this.tasks.filter(function (task) {  //这里为什么加上return就成功了？
                // return !task.completed;
                if (task.completed === false) {
                    return task;
                }
            });
        },
        //这里用computed来写computed的，前面的是用filters
        completedTasks: function () {
            return this.tasks.filter(function (task) {  //这里为什么加上return就成功了？
                // return task.completed;
                if (task.completed === true) {
                    return task;
                }
            });
        },

        //return computed tasks
        completions: function () {
            return this.tasks.filter(function (task) {
                return task.completed;
            });
        },

        remaining: function () {
            return this.tasks.filter(function (task) {
                return !task.completed;
            });
        }

    },

    methods: {
        addTask: function() {
            if ( !this.newTask) {   //防止添加空项目
                return ;
            }
            // e.prevantDefault();  这个组织表单清空提交 的prevant是加在表单的。@submit.prevant中
            // alert('adding a task');
            // alert(this.newTask);
            this.tasks.push({
                body: this.newTask,
                completed: false
            });

            this.newTask = '';
        },

        removeTask: function (task) {
            // this.tasks.pop(task);       //不写$remove(task)
            // console.log(task);       //
            var index = this.tasks.indexOf(task);       //当然如果task传进来的是index就不用这么做
            this.tasks.splice(index, 1);       //传进来的是对象 ，并没有index，不能直接.splice(task, 1)
        },

        editTask: function (task) {     //有些不对，可以改进，比如改完后还是原来位置，不安enter也会保存
            // remove the task
            this.removeTask(task);
            // update the newTask input
            this.newTask = task.body;
            // focus the newTask
            // 舍弃了v-el this.$$.newTask.focus(); 使用ref
            this.$refs.newTask.focus();
        },

        // completeTask: function (task) {
        //     task.completed = true;
        // },
        //change it to toggle
        toggleTaskCompletion: function (task) {
            task.completed = ! task.completed;
        },

        completeAll: function () {
            this.tasks.forEach(task => {
                task.completed = true;
            });
        },

        clearCompleted: function () {
            this.tasks = this.tasks.filter(function (task) {
                return ! task.completed;
            });
        }
    }
 });