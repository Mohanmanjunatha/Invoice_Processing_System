package com.invoiceprocessing.server.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/* here we are going to handle the APIs*/
/*we have to tell spring boot that it is an controller */
@RestController
public class InvoiceController {
/* WE HAVE TO MAKE SURE in this code that the invoice is handled in this code*/
    @PostMapping("/invoice")
/* using requestbody we can get the full body payload*/
    public invoice addInvoice(@RequestBody Invoice invoice){
        /* whatever we are getting we cannot use it directly we need to valida*/
    }




}
