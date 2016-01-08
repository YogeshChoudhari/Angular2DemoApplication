System.register([], function(exports_1) {
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(id, description, priority, dueDate, complete) {
                    if (!id) {
                        // TODO BLECH!!!
                        Task.lastId = Task.lastId + 1;
                        this.id = Task.lastId;
                    }
                    else {
                        this.id = id;
                    }
                    this.description = description;
                    this.dueDate = dueDate;
                    this.priority = priority;
                    this.complete = complete;
                }
                Task.prototype.setComplete = function () {
                    this.complete = true;
                    this.completedDate = new Date();
                };
                Task.prototype.clearCompleteFlag = function () {
                    this.complete = false;
                    this.completedDate = null;
                };
                Task.lastId = 0;
                return Task;
            })();
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=Task.js.map