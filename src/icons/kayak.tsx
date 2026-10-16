"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.414 6.414a2 2 0 0 0 0 -2.828l-1.414 -1.414l-2.828 2.828l1.414 1.414a2 2 0 0 0 2.828 0"}],["path",{"d":"M17.586 17.586a2 2 0 0 0 0 2.828l1.414 1.414l2.828 -2.828l-1.414 -1.414a2 2 0 0 0 -2.828 0"}],["path",{"d":"M6.5 6.5l11 11"}],["path",{"d":"M22 2.5c-9.983 2.601 -17.627 7.952 -20 19.5c9.983 -2.601 17.627 -7.952 20 -19.5"}],["path",{"d":"M6.5 12.5l5 5"}],["path",{"d":"M12.5 6.5l5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12.25],"a":0.06},{"fx":"pop","n":[0,1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.59,4.59],[19.41,19.41],[12,12],[9,15],[15,9]]}];

export const KayakIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
KayakIcon.displayName = "KayakIcon";
