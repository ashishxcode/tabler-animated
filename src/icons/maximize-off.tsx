"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8v-2c0 -.551 .223 -1.05 .584 -1.412"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2c.545 0 1.04 -.218 1.4 -.572"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17.7,19.71],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const MaximizeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MaximizeOffIcon.displayName = "MaximizeOffIcon";
