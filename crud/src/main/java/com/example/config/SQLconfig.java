package com.example.config;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import com.example.model.User;
import com.example.repository.UserRepository;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;


@Configuration
@EnableJpaRepositories(
    entityManagerFactoryRef = "firstEntityManagerFactory",
    transactionManagerRef = "firstTransactionManager",
    basePackageClasses = {UserRepository.class})
public class SQLconfig{

    @Bean
    public DataSource dataSourcefirst() {
    	DriverManagerDataSource dataSource = new DriverManagerDataSource();
    	dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3305/db?useSSL=false");
        dataSource.setUsername( "root" );
        dataSource.setPassword( "admin" );
        return dataSource;
    }

    @Bean(name = "firstTransactionManager")
    PlatformTransactionManager firstTransactionManager(EntityManagerFactory firstEntityManagerFactory) {
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(firstEntityManagerFactory);
        return txManager;
    }

    @Bean(name = "firstEntityManagerFactory")
    LocalContainerEntityManagerFactoryBean firstEntityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSourcefirst());
        em.setPackagesToScan(UserRepository.class.getPackage().getName(),User.class.getPackage().getName());
        em.setPersistenceUnitName("firstDb");

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setGenerateDdl(false);
        em.setJpaVendorAdapter(vendorAdapter);
        return em;
    }
}

