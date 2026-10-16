"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 17h6"}],["path",{"d":"M15 12l3 4.5"}],["path",{"d":"M21 12l-3 4.5v4.5"}],["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5h8"}],["path",{"d":"M7 5v8a3 3 0 0 0 3 3h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,6],"o":[14,13],"a":0.06},{"fx":"pop","n":[0,1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[18,17],[16.5,14.25],[5,5],[17,5],[11,5]]}];

export const TransactionYuanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TransactionYuanIcon.displayName = "TransactionYuanIcon";
