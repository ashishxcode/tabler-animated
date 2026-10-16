"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 11v8l3 -3m-6 0l3 3"}],["path",{"d":"M9 7l1 0"}],["path",{"d":"M14 7l1 0"}],["path",{"d":"M19 7l1 0"}],["path",{"d":"M4 7l1 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,7],[14.5,7],[19.5,7],[4.5,7]]}];

export const FoldDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FoldDownIcon.displayName = "FoldDownIcon";
