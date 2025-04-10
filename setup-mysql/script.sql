CREATE DATABASE IF NOT EXISTS ec_inov_colab;

CREATE TABLE IF NOT EXISTS ec_inov_colab.Usuarios (
    Id serial primary key,
    Name varchar(40),
    Username varchar(255),
    Email varchar(255),
    AddressStreet varchar(255),
    AddressSuite varchar(40),
    AddressCity varchar(60),
    AddressZipCode varchar(10),
    AddressGeoLat varchar(12),
    AddressGeoLng varchar(12),
    Phone varchar(60),
    WebSite varchar(255),
    CompanyName varchar(255),
    CompanyCatchPhrase varchar(255),
    CompanyBs varchar(255),
    CreatedDate DATE default (CURRENT_DATE),
    LastModifiedDate DATE
);

INSERT INTO ec_inov_colab.Usuarios (
    Name, Username, Email, AddressStreet, AddressSuite, AddressCity, AddressZipCode, AddressGeoLat, AddressGeoLng, Phone, WebSite, CompanyName, CompanyCatchPhrase, CompanyBs, LastModifiedDate
) VALUES
('Ana Lima', 'analima', 'ana.lima@email.com', 'Rua das Flores', 'Apto 101', 'São Paulo', '01001-000', '-23.5505', '-46.6333', '11-99888-1122', 'analima.dev', 'LimaTech', 'Inovando o amanhã', 'tecnologia web', '2025-04-01'),
('Carlos Souza', 'csouza', 'c.souza@email.com', 'Av. Paulista', 'Sala 201', 'São Paulo', '01311-000', '-23.5614', '-46.6555', '11-91234-5678', 'csouza.com', 'CS Corp', 'Soluções práticas, resultados reais', 'consultoria digital', '2025-04-02'),
('Beatriz Rocha', 'bia.rocha', 'beatriz@email.com', 'Rua Verde', 'Casa 5', 'Belo Horizonte', '30130-000', '-19.9227', '-43.9451', '31-98888-7766', 'beatrizr.net', 'Rocha Systems', 'Transformando ideias em ações', 'sistemas empresariais', '2025-04-03'),
('Lucas Alves', 'lucasalv', 'lucas.alves@email.com', 'Rua do Sol', 'Apto 302', 'Rio de Janeiro', '22040-002', '-22.9711', '-43.1822', '21-99999-1234', 'lucasalves.io', 'Alves Solutions', 'Tecnologia em foco', 'desenvolvimento web', '2025-04-04'),
('Mariana Dias', 'mari_dias', 'mariana@email.com', 'Av. Central', 'Bloco B', 'Curitiba', '80010-000', '-25.4284', '-49.2733', '41-91234-5678', 'marianad.com', 'Dias Co.', 'Pensando no futuro', 'gestão criativa', '2025-04-05'),
('Rafael Oliveira', 'rafa_oli', 'rafael@email.com', 'Rua Azul', 'Casa 22', 'Salvador', '40020-000', '-12.9711', '-38.5108', '71-98888-3344', 'rafael.dev', 'Oliveira Digital', 'Sua presença online, garantida', 'marketing digital', '2025-04-06'),
('Jéssica Mendes', 'jmendes', 'jessica@email.com', 'Rua das Palmeiras', 'Cobertura', 'Porto Alegre', '90010-000', '-30.0346', '-51.2177', '51-98765-4321', 'jmendes.tech', 'Mendes Creative', 'Criatividade sem limites', 'design e branding', '2025-04-07'),
('Thiago Costa', 'thiagoc', 'thiago@email.com', 'Av. Atlântica', 'Sala 3', 'Florianópolis', '88015-000', '-27.5954', '-48.5480', '48-99876-1234', 'thiagocosta.dev', 'Costa Labs', 'Inovação como regra', 'laboratório digital', '2025-04-08'),
('Larissa Ferreira', 'lari_f', 'larissa@email.com', 'Rua do Mar', 'Casa 9', 'Natal', '59010-000', '-5.7945', '-35.2110', '84-98765-4433', 'lariferreira.net', 'Ferreira Group', 'Conectando negócios', 'consultoria e sistemas', '2025-04-09'),
('Eduardo Martins', 'edmartins', 'eduardo@email.com', 'Av. Brasil', 'Apto 12', 'Recife', '50030-000', '-8.0476', '-34.8770', '81-98888-7788', 'edumartins.io', 'Martins IT', 'Tecnologia acessível', 'infraestrutura de TI', '2025-04-10'),
('Camila Torres', 'catorres', 'camila@email.com', 'Rua das Acácias', 'Bloco A', 'Campinas', '13010-000', '-22.9099', '-47.0626', '19-99999-1122', 'catorres.net', 'Torres Tech', 'Soluções integradas', 'suporte técnico', '2025-04-11'),
('Bruno Nascimento', 'bnasc', 'bruno@email.com', 'Rua Nova', 'Casa 30', 'Fortaleza', '60060-000', '-3.7172', '-38.5433', '85-98888-5555', 'brunon.net', 'Nascimento Digital', 'O amanhã, hoje', 'transformação digital', '2025-04-12'),
('Fernanda Ramos', 'fer_ramos', 'fernanda@email.com', 'Av. das Nações', 'Apto 15B', 'Brasília', '70040-010', '-15.7939', '-47.8828', '61-98765-1234', 'fernandaramos.dev', 'Ramos Corp', 'Visão e valor', 'consultoria estratégica', '2025-04-13'),
('Pedro Lima', 'plima', 'pedro@email.com', 'Rua das Laranjeiras', 'Casa 11', 'Manaus', '69005-000', '-3.1190', '-60.0217', '92-99887-2233', 'pedrolima.io', 'Lima & Lima', 'Qualidade garantida', 'projetos de software', '2025-04-14'),
('Isabela Martins', 'isamartins', 'isabela@email.com', 'Rua das Rosas', 'Cobertura 2', 'João Pessoa', '58013-000', '-7.1150', '-34.8631', '83-99876-4433', 'isamartins.com', 'Martins Criativa', 'Design com propósito', 'UX/UI design', '2025-04-15'),
('João Pedro', 'jpedro', 'joaopedro@email.com', 'Av. das Américas', 'Sala 1001', 'Rio de Janeiro', '22640-100', '-22.9999', '-43.3655', '21-98765-7788', 'jpedro.net', 'PedroTech', 'Impulsionando ideias', 'apps e mobile', '2025-04-16'),
('Tatiane Souza', 'tatisouza', 'tatiane@email.com', 'Rua Bela Vista', 'Apto 1', 'Vitória', '29010-000', '-20.3155', '-40.3128', '27-98888-1122', 'tatiane.dev', 'Souza & Cia', 'Confiança em cada linha', 'desenvolvimento back-end', '2025-04-17'),
('André Campos', 'acampos', 'andre@email.com', 'Rua Horizonte', 'Casa 8', 'São Luís', '65010-000', '-2.5307', '-44.3068', '98-99777-3344', 'andrecampos.com', 'Campos TI', 'Performance e resultado', 'otimização de sistemas', '2025-04-18'),
('Patrícia Andrade', 'pat.andrade', 'patricia@email.com', 'Av. do Contorno', 'Apto 22', 'Maceió', '57010-000', '-9.6659', '-35.7350', '82-99999-9988', 'patricia.io', 'Andrade Digital', 'Projetos com alma', 'gestão de produtos', '2025-04-19'),
('Felipe Teixeira', 'felipetex', 'felipe@email.com', 'Rua Central', 'Bloco C', 'Teresina', '64000-000', '-5.0919', '-42.8034', '86-98777-6655', 'felipet.dev', 'Teixeira Solutions', 'A solução está aqui', 'integrações e APIs', '2025-04-20');