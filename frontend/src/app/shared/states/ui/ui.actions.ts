import { Action } from '@ngrx/store';

export const SET_LANGUAGE = 'Set language';
export class SetLanguage implements Action {
  readonly type = SET_LANGUAGE;

  constructor(public payload: { language: string }) { }
}

export const TOGGLE_SIDENAV = 'Toggle sidenav';
export class ToggleSidenav implements Action {
  readonly type = TOGGLE_SIDENAV;

  constructor() { }
}

export const OPEN_SIDENAV = 'Open sidenav';
export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;

  constructor() { }
}

export const CLOSE_SIDENAV = 'Close sidenav';
export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;

  constructor() { }
}

export const OPEN_DIALOG_IDENTIFICATION = 'Open dialog identification';
export class OpenDialogIdentification implements Action {
  readonly type = OPEN_DIALOG_IDENTIFICATION;

  constructor() { }
}

export const CLOSE_DIALOG_IDENTIFICATION = 'Close dialog identification';
export class CloseDialogIdentification implements Action {
  readonly type = CLOSE_DIALOG_IDENTIFICATION;

  constructor() { }
}

export const OPEN_DIALOG_ORDER_SUMMARY = 'Open dialog order summary';
export class OpenDialogOrderSummary implements Action {
  readonly type = OPEN_DIALOG_ORDER_SUMMARY;

  constructor() { }
}

export const CLOSE_DIALOG_ORDER_SUMMARY = 'Close dialog order summary';
export class CloseDialogOrderSummary implements Action {
  readonly type = CLOSE_DIALOG_ORDER_SUMMARY;

  constructor() { }
}

export const UPDATE_PIZZERIA_INFORMATION = 'Update pizzeria information';
export class UpdatePizzeriaInformation implements Action {
  readonly type = UPDATE_PIZZERIA_INFORMATION;

  constructor(public payload: { name: string, phone: string, url: string }) { }
}

export type All
  = SetLanguage
  | ToggleSidenav
  | OpenSidenav
  | CloseSidenav
  | OpenDialogIdentification
  | CloseDialogIdentification
  | OpenDialogOrderSummary
  | CloseDialogOrderSummary
  | UpdatePizzeriaInformation;