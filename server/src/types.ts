// Settings for perlnavigator,
// defaults for configurable editors stored in package.json
// defaults for non-configurable editors in server.ts

import {
    Diagnostic,
} from 'vscode-languageserver/node';



export interface NavigatorSettings {
    perlPath: string;
    enableWarnings: boolean;
    perlcriticPath: string;
    perlcriticProfile: string;
    severity5: string;
    severity4: string;
    severity3: string;
    severity2: string;
    severity1: string;
    includePaths: string[];
}



export interface PerlElem {
    type: string;
    file: string;
    module: string;
    line: number;
    value: string;
};

// Used for mapping variable names to object types
export interface PerlType {
    type: string;
};

// Used for keeping track of what has been imported
export interface PerlImport {
    mod: string;
};


export interface PerlDocument {
    elems: Map<string, PerlElem>;
    vartypes: Map<string, PerlType>;
    imported: Map<string, boolean>;
    imports: Map<string, PerlImport>;
}

export interface DiagnosedDoc {
    diags: Diagnostic[],
    rawTags: string,
}


export interface CompletionPrefix {
    symbol: string,
    charStart: number,
    charEnd: number,
}