// Configuration Supabase - Variables d'environnement
const SUPABASE_CONFIG = {
    url: 'https://zzyamtisilnnzffczjem.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6eWFtdGlzaWxubnpmZmN6amVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODg1ODgsImV4cCI6MjA4Nzg2NDU4OH0.R9teR5chNRfVZaMU08m1jP8jFLh1Fscjrcfci34uTJ0'
};

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
} else {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}
