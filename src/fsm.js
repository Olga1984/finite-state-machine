class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        //throws an exception if config isn\'t passed
        if(!config){
            throw new Error('config isn\'t passed');
        }
    this.config = config.initial;
    this.state = this.config;
    this.states = config.states;
    this.previ = null;
    this.history = null;
    }    

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        //returns initial state after creation
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state meyhods
     */
    changeState(state) {
     //changes state
    //throws an exception if state isn\'t exist
        this.previ = this.state;
        if(this.states[state]){
            this.state = state;
        }else{
            throw new Error('state isn\'t exist');
        }
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {        
        if (this.states[this.state].transitions[event]){          this.changeState(this.states[this.state].transitions[event])
        }else{
            throw new Error('event in current state isn\'t exist');
        }
    }
    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state = this.config;        
    }
    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        if (!event){
            return Object.keys(this.states);
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
        if(this.previ){
            this.history = this.state;
            this.state = this.previ;
            this.previ = null;
            return true;
        }else{
            return false;
        }
    }
    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
       if (this.history) {
           this.previ = this.state;
           this.state = this.history;
           this.history = null;
           return true;
       }else {
           return false;
       }
    }
    /**
     * Clears transition history
     */
    clearHistory() {
        this.previ = null;
    }
}
module.exports = FSM;
/** @Created by Uladzimir Halushka **/
