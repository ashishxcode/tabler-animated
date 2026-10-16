"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0","fill":"currentColor"}],["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M12 3l0 2"}],["path",{"d":"M3 12l2 0"}],["path",{"d":"M12 19l0 2"}],["path",{"d":"M19 12l2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[12,4],[4,12],[12,20],[20,12]]}];

export const Focus2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Focus2Icon.displayName = "Focus2Icon";
