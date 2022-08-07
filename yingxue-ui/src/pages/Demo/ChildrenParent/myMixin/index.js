export default {
    methods: {
        giveParent(money){
           this.money-=money;
           this.$parent.money+=money;
        },
        
    },
}