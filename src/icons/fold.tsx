"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v6l3 -3m-6 0l3 3"}],["path",{"d":"M12 21v-6l3 3m-6 0l3 -3"}],["path",{"d":"M4 12l1 0"}],["path",{"d":"M9 12l1 0"}],["path",{"d":"M14 12l1 0"}],["path",{"d":"M19 12l1 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.5,12],[9.5,12],[14.5,12],[19.5,12]]}];

export const FoldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FoldIcon.displayName = "FoldIcon";
