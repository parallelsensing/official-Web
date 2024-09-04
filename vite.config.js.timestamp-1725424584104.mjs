// vite.config.js
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///C:/Users/Administrator/Desktop/zmx_0701/official-Web/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Administrator/Desktop/zmx_0701/official-Web/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import inject from "file:///C:/Users/Administrator/Desktop/zmx_0701/official-Web/node_modules/@rollup/plugin-inject/dist/es/index.js";
import { createHtmlPlugin } from "file:///C:/Users/Administrator/Desktop/zmx_0701/official-Web/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Administrator\\Desktop\\zmx_0701\\official-Web";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    vue(),
    inject({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      BMap: "BMap"
    }),
    createHtmlPlugin({
      inject: {
        data: {
          VITE_APP_VERSION: new Date().toLocaleString()
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 3034,
    host: "0.0.0.0"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcem14XzA3MDFcXFxcb2ZmaWNpYWwtV2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcem14XzA3MDFcXFxcb2ZmaWNpYWwtV2ViXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3Avem14XzA3MDEvb2ZmaWNpYWwtV2ViL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgaW5qZWN0IGZyb20gJ0Byb2xsdXAvcGx1Z2luLWluamVjdCdcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIGluamVjdCh7XHJcbiAgICAgICQ6ICdqcXVlcnknLCAvLyBcdThGRDlcdTkxQ0NcdTRGMUFcdTgxRUFcdTUyQThcdThGN0RcdTUxNjUgbm9kZV9tb2R1bGVzIFx1NEUyRFx1NzY4NCBqcXVlcnlcclxuICAgICAgalF1ZXJ5OiAnanF1ZXJ5JyxcclxuICAgICAgJ3dpbmRvd3MualF1ZXJ5JzogJ2pxdWVyeScsXHJcbiAgICAgIEJNYXA6ICdCTWFwJ1xyXG4gICAgfSksXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFx1OTcwMFx1ODk4MVx1NkNFOFx1NTE2NSBpbmRleC5odG1sIGVqcyBcdTZBMjFcdTcyNDhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICogaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NpbGVuY2VKdWRlL2FydGljbGUvZGV0YWlscy8xMjgyOTczNzFcclxuICAgICAgICovXHJcbiAgICAgIGluamVjdDoge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIFZJVEVfQVBQX1ZFUlNJT046IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMzQsXHJcbiAgICBob3N0OiAnMC4wLjAuMCcsIC8vIFx1NTE0MVx1OEJCOFx1NEVDRVx1N0Y1MVx1N0VEQ1x1OEJCRlx1OTVFRVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLGVBQWU7QUFDbFgsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLHdCQUF3QjtBQUpqQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDTCxHQUFHO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUtmLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLGtCQUFrQixJQUFJLEtBQUssRUFBRSxlQUFlO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
