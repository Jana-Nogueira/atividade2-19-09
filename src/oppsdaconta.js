
import { LightningElement, api } from "lwc";

export default class Oportunidade extends LightningElement {

    @api id;
    @api nome; 
    @api valor;
    @api fase;
    
    }

