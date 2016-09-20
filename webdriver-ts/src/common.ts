export interface JSONResult {
    framework: string,
    benchmark: string,
    type: string,
    min: number,
    max: number,
    mean: number,
    geometricMean: number,
    standardDeviation: number
}

export const config = {
    REPEAT_RUN: 10,
    DROP_WORST_RUN: 4,
    WARMUP_COUNT: 5,
    TIMEOUT: 60 * 1000,
    LOG_PROGRESS: true,
    LOG_DETAILS: false,
    LOG_DEBUG: false
};

export interface FrameworkData {
    name: string;
    uri: string;
}

function f(name: string, uri: string = null): FrameworkData {
    return {name, uri: uri? uri : name};
}

export const frameworks = [
    f("angular-v2.0.0"),
    f("react-v15.3.1"),
    f("angular-v1.5.8"),
    f("vanillajs")
];