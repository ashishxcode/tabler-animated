"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7q 4.5 -3 9 0t 9 0"}],["path",{"d":"M3 17q 4.5 -3 9 0q .218 .144 .434 .275"}],["path",{"d":"M3 12q 4.5 -3 9 0q 1.941 1.294 3.882 1.472"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,7],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.72,16.39],[9.44,11.99],[19,19],[19,17.5]]}];

export const RippleUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RippleUpIcon.displayName = "RippleUpIcon";
