"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.36 18.387l-5.268 3.333a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l1.317 -.777m2.535 -1.493l2.898 -1.709a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .414 -.116 .812 -.326 1.155"}],["path",{"d":"M12 7v1"}],["path",{"d":"M12 8v.01"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M12 16h.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"shake","n":[0,1,2,4],"o":[12,12]}];

export const AlertHexagonOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlertHexagonOffIcon.displayName = "AlertHexagonOffIcon";
