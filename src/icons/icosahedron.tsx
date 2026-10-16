"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 0 0 1 1.006 1.735"}],["path",{"d":"M3.29 6.97l4.21 2.03"}],["path",{"d":"M20.71 6.97l-4.21 2.03"}],["path",{"d":"M20.7 17h-17.4"}],["path",{"d":"M11.76 2.03l-4.26 6.97l-4.3 7.84"}],["path",{"d":"M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84"}],["path",{"d":"M12 17l-4.5 -8h9l-4.5 8"}],["path",{"d":"M12 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.4,7.99],[18.61,7.99],[12,17],[7.48,9.44],[16.52,9.44],[12,13],[12,19.5]]}];

export const IcosahedronIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IcosahedronIcon.displayName = "IcosahedronIcon";
