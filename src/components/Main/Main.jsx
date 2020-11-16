import React from 'react'
import Checkbox from '../Controls/Checkbox/Checkbox'
import Dropdown from '../Controls/Dropdown/Dropdown'
import ConnectedButton from '../Controls/Button/ConnectedButton'
import Input from '../Controls/TextField/Input'
import Form from '../Form/Form'
import { setRegistrationEmail, setRegistrationLanguage, setRegistrationName, setRegistrationPhone, toggleRegistrationCheckbox } from '../../redux/actions'

export default function Main() {
  return (
    <main className="main main--registration">
      <Form>
        <div className="form__row--header">
          <h1 className="text text--header form__text form__text--header">Регистрация</h1>
          <p className="text text--regular form__text form__text--regular">
            Уже есть аккаунт? <a href="/" className="text--link">Войти</a>
          </p>
        </div>

        <div className="form__row">
          <Input 
            id="form-name" 
            label="Имя" 
            placeholder="Введите Ваше имя" 
            type="text"
            selector={`registration.name`}
            onInputChange={ setRegistrationName }
          />
        </div>

        <div className="form__row">
          <Input 
            id="form-mail" 
            label="Email" 
            placeholder="Введите Ваш email" 
            type="email"
            selector={`registration.email`}
            onInputChange={ setRegistrationEmail }
          />
        </div>

        <div className="form__row">
          <Input 
            id="form-phone" 
            label="Номер телефона" 
            placeholder="Ваш номер телефона" 
            type="text"
            selector={`registration.phone`}
            onInputChange={ setRegistrationPhone }
          /> 
        </div>

        <div className="form__row">
          <Dropdown 
            id="form-languages" 
            values={['Русский', 'Английский', 'Китайский', 'Испанский']} 
            label='Язык'
            onItemChange={ setRegistrationLanguage }
          />
        </div>

        <div className="form__row">
          <Checkbox 
            id="form-agreement" 
            label={ <>Принимаю <a href="/" className="text--link">условия</a> соглашения</> }
            onStateChange={toggleRegistrationCheckbox}
          />
        </div>

        <div className="form__row">
          <ConnectedButton 
            text="Зарегистрироваться"
            type="submit"
            check='registration'
            isFluid
          />
        </div>
      </Form>
    </main>
  )
}
