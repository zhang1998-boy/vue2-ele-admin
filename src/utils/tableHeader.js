
// 1 业绩数据
const businessDataTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'companyProjectName',
    width: 240,
    editType: 'select',
    minWidth: 70,
    resizable: true,
    fixed: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '业绩贡献-签约维度(%)',
    prop: 'signValue',
    minWidth: 70,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '业绩贡献-回款维度(%)',
    prop: 'refundValue',
    minWidth: 70,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '业绩贡献-营收维度(%)',
    prop: 'incomeValue',
    editType: 'select',
    minWidth: 70,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '业绩贡献-综合维度(%)',
    prop: 'syntheticalValue',
    minWidth: 0,
    minWidth: 70,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 40,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 2 货值结构
const goodsDataTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    width: 240,
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '业态',
    prop: 'businessUnit',
    minWidth: 150,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '全盘货值(万元)',
    prop: 'totalRemainingValue',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '全盘货值去化周期(月)',
    prop: 'totalRemainingDecomposeCycle',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '全盘取证货值(万元)',
    prop: 'certificateTotalUnsaleValue',
    minWidth: 0,
    minWidth: 150,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '取证货值去化周期(月)',
    prop: 'certificateUnsaleDecomposeCycle',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 3 人迁回-达成
const backDataTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    editType: 'select',
    minWidth: 150,
    fixed: true,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '时间维度',
    prop: 'timeDimensionName',
    minWidth: 120,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '工抵认购金额(万元)',
    prop: 'workCreditSubscriptionAmount',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '非工抵认购金额(万元)',
    prop: 'notworkCreditSubscriptionAmount',
    editType: 'select',
    minWidth: 170,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '完成工抵签约金额(万元)',
    prop: 'workCreditContractAmount',
    minWidth: 0,
    minWidth: 170,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '完成非工抵签约金额(万元)',
    prop: 'notworkCreditContractAmount',
    minWidth: 200,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '完成工抵回款金额(万元)',
    prop: 'workCreditRebateAmount',
    minWidth: 180,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '完成非工抵回款金额(万元)',
    prop: 'notworkCreditRebateAmount',
    minWidth: 200,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 120,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 31 人迁回目标
const backTargetDataTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    width: 240,
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '时间维度',
    prop: 'timeDimensionName',
    minWidth: 150,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '认购目标(万元)',
    prop: 'subscriptionTarget',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '签约目标(万元)',
    prop: 'contractTarget',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '回款目标(万元)',
    prop: 'rebateTarget',
    minWidth: 0,
    minWidth: 150,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 4 三费
const threeDataTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    fixed: true,
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '管理费用当年预算数(万元)',
    prop: 'budgetManagementFee',
    minWidth: 230,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '管理费用当年累计发生额(万元)',
    prop: 'actualManagementFee',
    minWidth: 230,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '营销费用当年预算数(万元)',
    prop: 'budgetMarketingExpenses',
    editType: 'select',
    minWidth: 230,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '营销费用当年累计发生额(万元)',
    prop: 'actualMarketingExpenses',
    minWidth: 0,
    minWidth: 230,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '财务费用当年预算数(万元)',
    prop: 'budgetFinanceExpenses',
    minWidth: 230,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '财务费用当年累计发生额(万元)',
    prop: 'actualFinanceExpenses',
    minWidth: 230,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 5 变洽签管理
const changeTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    width: 240,
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '设计变更率考核目标(%)',
    prop: 'targetDesignChanges',
    minWidth: 160,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '设计变更率实际值(%)',
    prop: 'actualDesignChanges',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '洽商签证率考核目标(%)',
    prop: 'targetNegotiateVisas',
    editType: 'select',
    minWidth: 160,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '洽商签证率实际值(%)',
    prop: 'actualNegotiateVisas',
    minWidth: 0,
    minWidth: 150,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '本月新增金额(万元)',
    prop: 'currentMonthAmount',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '较上月新增金额(万元)',
    prop: 'precedingMonthChangesAmount',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 120,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 6 在建规模设计-建设
const designTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    editType: 'select',
    minWidth: 140,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '在建项目个数(个)',
    prop: 'buildingCount',
    minWidth: 150,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '在建项目面积(万方)',
    prop: 'buildingVolume',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '竣备未清盘项目个数(个)',
    prop: 'completedNotsaleFinishCount',
    editType: 'select',
    minWidth: 170,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '竣备未清盘项目面积(万方)',
    prop: 'completedNotsaleFinishVolume',
    minWidth: 200,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '停工项目个数(个)',
    prop: 'stopCount',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '停工项目面积(万方)',
    prop: 'stopVolume',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 120,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 61 在建规模监管
const watchTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '重点监管项目个数(个)',
    prop: 'supervisionCount',
    minWidth: 160,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '重点监管项目货值(万元)',
    prop: 'supervisionVolume',
    minWidth: 180,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '一般监管项目个数(个)',
    prop: 'notSupervisionCount',
    editType: 'select',
    minWidth: 180,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '一般监管项目货值(万元)',
    prop: 'notSupervisionVolume',
    minWidth: 0,
    minWidth: 180,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '低效无效项目个数(个)',
    prop: 'inefficientCount',
    minWidth: 180,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '低效无效项目货值(万元)',
    prop: 'inefficientVolume',
    minWidth: 180,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 120,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 7 运营计划
const planTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    editType: 'select',
    fixed: true,
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '时间维度(月份)',
    prop: 'timeDimensionName',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '里程碑计划数(个)',
    prop: 'milestonePlan',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '里程碑实际完成数(个)',
    prop: 'milestoneActual',
    editType: 'select',
    minWidth: 160,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '一级节点计划数(个)',
    prop: 'firstNodesPlan',
    minWidth: 170,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '一级节点实际完成数(个)',
    prop: 'firstNodesActual',
    width: 190,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '重难点计划数(个)',
    prop: 'difficultyPlan',
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    width: 140,
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '重难点实际完成数(个)',
    prop: 'difficultyActual',
    minWidth: 160,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '本年督办计划数',
    prop: 'supervisionPlan',
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    minWidth: 120,
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '督办实际完成数',
    prop: 'supervisionActual',
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    minWidth: 120,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    minWidth: 120,
    precision: 2,
    headerAlign: 'center',
  },
];

// 8 利润收入
const incomeTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    width: 240,
    editType: 'select',
    minWidth: 150,
    fixed: true,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '本年营收指标(万元)',
    prop: 'budgetRevenue',
    minWidth: 150,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '本年实际营收额(万元)',
    prop: 'actualRevenue',
    minWidth: 180,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '本年利润指标(万元)',
    prop: 'budgetProfit',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '本年完成实际利润额(万元)',
    prop: 'actualProfit',
    minWidth: 0,
    minWidth: 210,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '本年现金流目标(万元)',
    prop: 'budgetCashFlow',
    minWidth: 180,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '本年完成实际现金流额(万元)',
    prop: 'actualCashFlow',
    minWidth: 210,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 9 人资管理
const peopleTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    editType: 'select',
    minWidth: 120,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '员工总量(人数)',
    prop: 'employeeNum',
    minWidth: 120,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '较上月员工数量变化(人数)',
    prop: 'employeeChangesNum',
    minWidth: 210,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '薪资总量(万元)',
    prop: 'salaryAmount',
    editType: 'select',
    minWidth: 120,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '较上月薪资总量变化',
    prop: 'salaryChangesAmount',
    minWidth: 0,
    minWidth: 150,
    resizable: true,
    editType: 'numInput',
    precision: 2,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '累计营收额',
    prop: 'cumulativeRevenue',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '人均效能(人/万)',
    prop: 'efficacyPerCapita',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '人均效能标准值',
    prop: 'efficacyPerCapitaValue',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    precision: 2,
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];
// 10 绩效管理
const moneyTableHeader = [

  {
    label: '城市（项目）公司',
    prop: 'regionCompanyName',
    width: 240,
    editType: 'select',
    minWidth: 150,
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    label: '绩效基数(分数)',
    prop: 'performanceBase',
    minWidth: 150,
    editType: 'select',
    resizable: true,
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '绩效得分',
    prop: 'performanceScore',
    minWidth: 150,
    resizable: true,
    editType: 'input',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '绩效扣分',
    prop: 'deductionsPerformance',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '绩效排名',
    prop: 'performanceRanking',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '较上月排名变化',
    prop: 'rankingChanges',
    editType: 'select',
    minWidth: 150,
    resizable: true,
    editType: 'select',
    showOverflowTooltip: true,
    align: 'right',
    headerAlign: 'right',
  },
  {
    label: '层级类型',
    prop: 'level',
    minWidth: 150,
    editType: 'numInput',
    resizable: true,
    showOverflowTooltip: true,
    align: 'center',
    precision: 2,
    headerAlign: 'center',
  },
];



export { businessDataTableHeader, goodsDataTableHeader, backDataTableHeader, backTargetDataTableHeader, threeDataTableHeader, changeTableHeader, designTableHeader, planTableHeader, watchTableHeader, incomeTableHeader, peopleTableHeader, moneyTableHeader };