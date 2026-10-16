"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12l0 .01"}],["path",{"d":"M14.828 9.172a4 4 0 0 1 0 5.656"}],["path",{"d":"M17.657 6.343a8 8 0 0 1 0 11.314"}],["path",{"d":"M9.168 14.828a4 4 0 0 1 0 -5.656"}],["path",{"d":"M6.337 17.657a8 8 0 0 1 0 -11.314"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12.01],[15.41,12],[8.58,12]]}];

export const AccessPointIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AccessPointIcon.displayName = "AccessPointIcon";
