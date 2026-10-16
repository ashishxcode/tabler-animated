"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 13v-8l-3 3m6 0l-3 -3"}],["path",{"d":"M9 17l1 0"}],["path",{"d":"M14 17l1 0"}],["path",{"d":"M19 17l1 0"}],["path",{"d":"M4 17l1 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,9],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,17],[14.5,17],[19.5,17],[4.5,17]]}];

export const FoldUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FoldUpIcon.displayName = "FoldUpIcon";
