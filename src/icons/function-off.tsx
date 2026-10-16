"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15.5v.25c0 .69 .56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374 -1.244l.376 -3.756m.363 -3.63l.013 -.126a1.38 1.38 0 0 1 1.374 -1.244c.69 0 1.25 .56 1.25 1.25v.25"}],["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405"}],["path",{"d":"M9 12h3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[10.5,12]]}];

export const FunctionOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FunctionOffIcon.displayName = "FunctionOffIcon";
