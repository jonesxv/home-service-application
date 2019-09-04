package com.jones.homeservicespp;

import org.springframework.data.mongodb.core.aggregation.Field;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;

public class CustomLookupOperation extends LookupOperation {
    public CustomLookupOperation(Field from, Field localField, Field foreignField, Field as) {
        super(from, localField, foreignField, as);
    }
}
