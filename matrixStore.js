import { defineStore } from 'pinia'

export const matrixStore = defineStore('matrix', {
    state: () => ({
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789',
        alpID: 'AA AB AC AD AE AF AG AH AI AJ AK AL AM AN AO AP AQ AR AS AT AU AV AW AX AY AZ BA BB BC BD BE BF BG BH BI BJ BK BL BM BN BO BP BQ BR BS BT BU BV BW BX BY BZ CA CB CC CD CE CF CG CH CI CJ CK CL CM CN CO CP CQ CR CS CT CU CV CW CX CY CZ DA DB DC DD DE DF DG DH DI DJ DK DL DM DN DO DP DQ DR DS DT DU DV',
        x: 96,
        y: 47,
        allID: [],
        showIntro: true
    }),
    getters: {
        columnID(state) {
            var alpArr = []
            alpArr = state.alpID.split(' ') 
            alpArr = alpArr.slice(0, state.x)
            return alpArr
        },
        rowID(state) {
            const columnIds = []
            for (let i = 1; i <= state.x; i++) columnIds.push(i)
            return columnIds
        },
        columns(state) {
            for (let i = 0; i < state.x; i++) {
                state.allID[i] = []
            }
            return state.allID
        },
        fillID(state) {
            for (let j = 0; j < this.columnID.length; j++) {
                const colNum = this.columnID[j]
                for (let rowNum = 1; rowNum <= state.y; rowNum++) {
                    const ID = `${colNum}${rowNum}`
                    this.columns[j].push(ID)
                }
            }
            return state.allID
        }
    },
    actions: {
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        },
        ranNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
})