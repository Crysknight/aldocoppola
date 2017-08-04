import { EDIT_APPOINTMENT } from './types';

export default appointmentToEdit => ({ type: EDIT_APPOINTMENT, payload: appointmentToEdit });