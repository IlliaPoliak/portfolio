import React from 'react';
import styles from './Tests.module.css'

class AddTestForm extends React.Component{

    state = {
        id: this.props.nextId,
        question: '',
        answer: '',
        variants: {
            a: 'a',
            b: '',
            c: '',
            d: ''
        }
    }

    chooseRightVariant = e => this.setState({ answer: e.target.value })

    render(){
        return(
            <form>
                <div className={styles.testForm}>
                    <input type="text" placeholder='Вопрос' onChange={ e => this.setState({ question: e.target.value }) }/>
                    <input type="text" placeholder='a.' onChange={ e => this.setState({ variants: {...this.state.variants, a: e.target.value} }) }/>
                    <input type="text" placeholder='b.' onChange={ e => this.setState({ variants: {...this.state.variants, b: e.target.value} }) }/>
                    <input type="text" placeholder='c.' onChange={ e => this.setState({ variants: {...this.state.variants, c: e.target.value} }) }/>
                    <input type="text" placeholder='d.' onChange={ e => this.setState({ variants: {...this.state.variants, d: e.target.value} }) }/>
                    <label> Правильный вариант: 
                        <label>a
                            <input type="radio" name="rightAnswer" value='a' defaultChecked onChange={this.chooseRightVariant}/>
                        </label>
                        <label>b
                            <input type="radio" name="rightAnswer" value='b' onChange={this.chooseRightVariant}/>
                        </label>
                        <label>c
                            <input type="radio" name="rightAnswer" value='c' onChange={this.chooseRightVariant}/>
                        </label>
                        <label>d
                            <input type="radio" name="rightAnswer" value='d' onChange={this.chooseRightVariant}/>
                        </label>
                    </label>
                </div>
               
                <button onClick={ e => this.props.handleSubmit(this.state, e)} >Сохранить</button>
                <button onClick={ () => this.props.closeAddForm() } >Отмена</button>
            </form>
        )
    }
}

export default AddTestForm;
