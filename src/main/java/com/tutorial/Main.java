package com.tutorial;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class Main extends Application<ApplicationConfiguration> {


    public static void main(String[] args) throws Exception {
        new Main().run(args);
    }

    @Override
    public void initialize(Bootstrap<ApplicationConfiguration> bootstrap) {

    }
    @Override
    public void run(ApplicationConfiguration configuration, Environment environment) throws Exception {
    }
}
