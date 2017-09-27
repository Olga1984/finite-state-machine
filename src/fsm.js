class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        //throws an exception if config isn\'t passed
        if(!config){
            throw new Error('!config');
        }
    this.config = config.initial;
    this.current = this.config;
    this.states = config.states;
    }    

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        //returns initial state after creation
        return this.current;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
     //changes state
    //throws an exception if state isn\'t exist
        if(this.states[state]){
            this.state = state;
        }else{
            throw new Error('!state');
        }
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        this.previ = this.state;
        if (this.states[this.state].transitions[event]){          this.changeState(this.states[this.state].transitions[event])
        }else{
            throw new Error('event in current state isn\'t exist');
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.current = config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        if (!event){
            return ['normal', 'busy', 'hungry', 'sleeping'];
        } else{
        var states = [];
        for (var key in this.states){
            if (this.states[key].transitions[event]){
                states.push(key);
            }
        }
            return states;
        }       
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
