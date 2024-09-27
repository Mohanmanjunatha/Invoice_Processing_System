package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.model.Invoice;

public interface InvoiceService {
    Invoice addInvoice(Invoice invoice);
}
