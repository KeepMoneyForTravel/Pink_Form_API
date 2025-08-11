import { Consignee } from './consignee.entity';
export class CertificateInfoDto {
    certno: string;
    refno: string;
}

export class ExporterDto {
    name: string;
    add1: string;
    add2: string;
    add3: string;
    add4: string;
    zipcode: string;
    entryname: string;
    unsture: string;
}

export class ProductDto {
    descen: string;
    qty: number;
    qtyunit_name: string;
    pd_district: string;
    pd_subprov: string;
    pd_provc: string;
    pd_prov: string;
}

export class TransportDto {
    transmode: string;
    dep: Date;
    portname: string;
    port_entryname: string;
}

export class CertificationDto {
    approve_d: Date;
    ready_d: Date;
}

export class InvoiceDto {
    invno: string;
    remark: string;
}

export class ExportCertificateDto {
    certificate: CertificateInfoDto;
    consignee: Consignee_r;
    exporter: ExporterDto;
    products: ProductDto[];
    transport: TransportDto;
    certification: CertificationDto;
    invoice: InvoiceDto;
}

export class Consignee_r {
    cn_code: string;
    cn_name: string;
    cn_addr1: string;
    cn_addr2: string;
    cn_addr3: string;
    cn_addr4: string;
    cn_cntrycode: string;
    cn_zipcode: string;
    cn_unstruc: string;
}