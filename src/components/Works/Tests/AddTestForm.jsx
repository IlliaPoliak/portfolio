import React from 'react';
import styles from './TestPage.module.css'
import ControlBtn from '../../common/ControlBtn/ControlBtn';

const variants = ['a', 'b', 'c', 'd']

class AddTestForm extends React.Component {

    state = {
        id: this.props.nextId,
        question: '',
        answer: 'a',
        variants: { 'a': '', 'b': '', 'c': '', 'd': '' }
    }

    chooseRightVariant = e => this.setState({ answer: e.target.value })

    render() {
        return (
            <form>
                <div className={styles.testForm}>
                    <label className={styles.questionBlock}> Введите вопрос:<br />
                        <input
                            type="text"
                            placeholder='Вопрос'
                            onChange={e => this.setState({ question: e.target.value })} />
                    </label>

                    {variants.map((v, i) => <div key={v}>
                        <input
                            defaultChecked={i === 0 ? true : false}
                            type="radio" name="rightAnswer"
                            value={v}
                            onChange={this.chooseRightVariant}
                        />
                        <input
                            type="text"
                            placeholder={v + ')'}
                            onChange={e => this.setState({ variants: { ...this.state.variants, [v]: e.target.value } })}
                        />
                    </div>)
                    }
                </div>

                <div className={styles.controlBtnWrapper}>
                    <ControlBtn func={e => this.props.handleSubmit(this.state, e)}>Сохранить</ControlBtn>
                    <ControlBtn func={() => this.props.closeAddForm()}>Отмена</ControlBtn>
                </div>
            </form>
        )
    }
}

export default AddTestForm;
