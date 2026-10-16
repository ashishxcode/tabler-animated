"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125l0 15.75"}],["path",{"d":"M12 9h-2"}],["path",{"d":"M12 6h-3"}],["path",{"d":"M12 12h-3"}],["path",{"d":"M12 18h-3"}],["path",{"d":"M12 15h-2"}],["path",{"d":"M21 3h-4"}],["path",{"d":"M19 3v18"}],["path",{"d":"M21 21h-4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6,7,8],"o":[12.5,21],"a":-16}];

export const RulerMeasure2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RulerMeasure2Icon.displayName = "RulerMeasure2Icon";
