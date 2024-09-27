package com.invoiceprocessing.server.controller;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.invoiceprocessing.server.services.InvoiceService;


/* here we are going to handle the APIs*/
/*we have to tell spring boot that it is an controller */
@RestController
public class InvoiceController {


/* WE HAVE TO MAKE SURE in this code that the invoice is handled in this code*/

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")

    public Invoice addInvoice(@RequestBody Invoice invoice){
        /* whatever we are getting we cannot use it directly we need to valida*/
        return this.invoiceService.addInvoice(invoice);
    }




}
